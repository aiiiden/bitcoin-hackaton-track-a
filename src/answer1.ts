import axios from "axios";

async function getBlockHashByHeight(): Promise<string> {
  console.group("--- 블록 데이터 조회 결과 ---");
  try {
    const url = `https://api.blockcypher.com/v1/btc/test3/blocks/2817664`;
    const response = await axios.get(url);
    const blockHash = response.data.hash;
    return blockHash;
  } catch (error) {
    console.error("블록데이터 조회 실패:", error);
    throw error;
  }
}

getBlockHashByHeight()
  .then((hash) => {
    console.log(`블록 해시: ${hash}`); // 000000002bc380e9545532f5465e8fe573d33430c77c2ca13c4419bfbb52bc90
  })
  .catch((error) => {
    console.error("에러:", error);
  })
  .finally(() => {
    console.groupEnd();
  });
