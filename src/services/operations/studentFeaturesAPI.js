import { toast } from "react-hot-toast";
import { studentEndpoints } from "../apis";
import { apiConnector } from "../apiConnector";
import { loadStripe } from "@stripe/stripe-js";
import { setPaymentLoading } from "../../slices/courseSlice";
import { resetCart } from "../../slices/cartSlice";
import { CardElement } from "@stripe/react-stripe-js";

const {
  COURSE_PAYMENT_API,
  COURSE_VERIFY_API,
  SEND_PAYMENT_SUCCESS_EMAIL_API,
} = studentEndpoints;

const stripePromise = loadStripe(
  import.meta.env.VITE_APP_STRIPE_PUBLISHABLE_KEY
);

export async function buyCourse(
  token,
  coursesId,
  userDetails,
  navigate,
  dispatch,
  stripe
) {
  const toastId = toast.loading("Loading...");

  try {
    // initiate the order
    const session = await apiConnector(
      "POST",
      COURSE_PAYMENT_API,
      { coursesId },
      {
        Authorization: `Bearer ${token}`,
      }
    );
    console.log("orderResponse... ", session);
    if (!session.data.success) {
      throw new Error(session.data.message);
    }

    const sessionId = session.data.sessionId;
    // const stripe = await stripePromise;
    const response = await stripe.redirectToCheckout({
      sessionId: sessionId,
    });
    console.log("response... ", response);
    if (response.error) {
      toast.error("Payment failed");
      console.log("Payment failed: ", response.error);
    } else {
      //send successful mail
      sendPaymentSuccessEmail(session.data, token);
      //verifyPayment
      verifyPayment(
        { sessionId: session.data.sessionId, coursesId },
        token,
        navigate,
        dispatch
      );
    }
  } catch (error) {
    console.log("PAYMENT API ERROR.....", error);
    toast.error(error.response?.data?.message || "Could not make Payment");
  }
  toast.dismiss(toastId);
}

// ================ send Payment Success Email ================
export async function sendPaymentSuccessEmail(response, token) {
  try {
    await apiConnector(
      "POST",
      SEND_PAYMENT_SUCCESS_EMAIL_API,
      {
        orderId: response.orderId,
        paymentId: response.paymentIntentId,
        amount: response.amount,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    );
  } catch (error) {
    console.log("PAYMENT SUCCESS EMAIL ERROR....", error);
  }
}

// ================ verify payment ================
export async function verifyPayment(bodyData, token, navigate, dispatch) {
  const toastId = toast.loading("Verifying Payment....");
  dispatch(setPaymentLoading(true));

  try {
    const response = await apiConnector("POST", COURSE_VERIFY_API, bodyData, {
      Authorization: `Bearer ${token}`,
    });

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    toast.success("Payment Successful, you are added to the course");
    navigate("/dashboard/enrolled-courses");
    dispatch(resetCart());
  } catch (error) {
    console.log("PAYMENT VERIFY ERROR....", error);
    toast.error("Could not verify Payment");
  }
  toast.dismiss(toastId);
  dispatch(setPaymentLoading(false));
}
