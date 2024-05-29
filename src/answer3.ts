import axios from "axios";

console.group("--- 블록 Y 에서 생성된 출력 개수 ---");

async function getBlockHashByHeight(height: number): Promise<string> {
  try {
    const url = `https://api.blockcypher.com/v1/btc/test3/blocks/${height}`;
    const response = await axios.get(url);
    const txcount = response.data.n_tx;
    return txcount;
  } catch (error) {
    console.error("조회 실패:", error);
    throw error;
  }
}

const blockHeight = 2817665;

getBlockHashByHeight(blockHeight)
  .then((count) => {
    console.log(`블록 ${blockHeight} 에서 생성된 출력 개수: ${count}`); // 4026
  })
  .catch((error) => {
    console.error("에러:", error);
  })
  .finally(() => {
    console.groupEnd();
  });
