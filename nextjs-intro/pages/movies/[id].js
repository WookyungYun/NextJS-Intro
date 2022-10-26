import { useRouter } from "next/router";

export default function PaymentDetailsBase() {
  const router = useRouter();
  console.log(router);
  return "detail";
}
