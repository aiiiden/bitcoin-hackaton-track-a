import * as bitcoinMessage from "bitcoinjs-message";

const address = "1E9YwDtYf9R29ekNAfbV7MvB4LNv7v3fGa";
const message = "1E9YwDtYf9R29ekNAfbV7MvB4LNv7v3fGa";
const signature =
  "HCsBcgB+Wcm8kOGMH8IpNeg0H4gjCrlqwDf/GlSXphZGBYxm0QkKEPhh9DTJRp2IDNUhVr0FhP9qCqo2W0recNM=";

console.group("--- 메시지 검증 ---");

function verifyMessage(
  address: string,
  message: string,
  signature: string
): boolean {
  try {
    return bitcoinMessage.verify(message, address, signature);
  } catch (error) {
    console.error("메시지 검증 실패:", error);
    return false;
  }
}

const isValid = verifyMessage(address, message, signature);

console.log(
  `${isValid ? "메시지가 유효합니다" : "메시지가 유효하지 않습니다"}` // 메시지가 유효하지 않습니다
);

console.groupEnd();
