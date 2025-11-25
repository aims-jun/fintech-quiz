import { Quiz } from "@/types/quiz";

// 모든 퀴즈를 하나의 배열로 통합
export const allQuizzes: Quiz[] = [
  {
    id: 1,
    question:
      "에임스는 금융위원회에서 선정한 국가대표 핀테크인 K-Fintech30으로 선정된 기업이다.",
    answer: true,
    explanation: "에임스는 K-Fintech30에 선정된 국가대표 핀테크 기업입니다.",
  },
  {
    id: 2,
    question:
      "보험사에서 판매하는 실손의료비보험은 현재 5세대까지 출시 되었다.",
    answer: false,
    explanation: "실손의료비보험은 현재 4세대까지 출시되었습니다.",
  },
  {
    id: 3,
    question:
      "실손보험을 가입한 환자가 허리가 아파 정형외과에 방문하였는데 도수치료를 하면서 병원의 권유로 얼굴 피부미용시술을 함께 받았다. 피부미용시술 금액을 도수치료 금액으로 둔갑해서 보험사에 실손보험 청구를 하는 것은 올바른 행동일까?",
    answer: false,
    explanation:
      "피부미용시술을 다른 치료로 속여서 청구하는 것은 보험사기에 해당하며 올바르지 않은 행동입니다.",
  },
  {
    id: 4,
    question:
      "복잡한 보험약관을 사람이 아닌 AI를 활용하여 자동으로 데이터화하는 에임스의 서비스명칭은 오토딧이다.",
    answer: true,
    explanation:
      "에임스의 AI 기반 보험약관 자동 데이터화 서비스는 '오토딧(AutoDit)'입니다.",
  },
  {
    id: 5,
    question:
      "에임스의 기술을 도입한 보험회사로 보험소비자가 보험금을 청구할 경우 다른 보험회사보다 보험금을 신속하고 정확하게 받을 수 있다.",
    answer: true,
    explanation:
      "에임스의 AI 기술을 활용하면 보험금 심사가 자동화되어 신속하고 정확한 보험금 지급이 가능합니다.",
  },
  {
    id: 6,
    question:
      "2025년 산업통상부, 과학기술부 등 13개 정부부처는  다양한 산업에 걸쳐 유망 기업들을 혁신프리미어 1000 기업으로 선정하였다. 에임스는 환경부 추천으로 혁신프리미어 1000에 선정되었다.",
    answer: false,
    explanation:
      "에임스는 금융위원회에서 추천한 11개의 유망 기업 중 하나로 선정되었습니다.",
  },
  {
    id: 7,
    question:
      "에임스는 2025년 D-Camp 데모데이에서 금융기관 우수사례 스타트업에 선정되었다.",
    answer: true,
    explanation:
      "에임스는 금융위원회 및 핀테크지원센터에서 운영하는 다수의 프로그램에서 보험사들과 협업하여 금융기관 우수사례 스타트업으로 선정되었습니다.",
  },
  {
    id: 8,
    question:
      "에임스는 삼성카드와 함께 삼성금융그룹 C-Lab Outside에 참여하여 우수상을 수상했다.",
    answer: false,
    explanation:
      "에임스는 삼성생명과 함께 삼성금융그룹 C-Lab Outside에 참여하여 우수상을 수상했습니다.",
  },
  {
    id: 9,
    question:
      "실손보험 가입자는 병원 치료비 전액을 실손보험으로 보상받을 수 있다.",
    answer: false,
    explanation:
      "보험 가입자는 본인부담금을 제외한 금액을 보상받을 수 있으며, 의학적 필요성이 인정되지 않는 경우에는 지급이 제한될 수 있습니다. 이는 무분별한 병원 이용, 이른바 '의료 쇼핑'과 같은 모럴헤저드를 방지하기 위한 제도적 장치입니다.",
  },
];

// 랜덤으로 5개의 퀴즈를 선택하는 함수
export const getRandomQuizzes = (count: number = 5): Quiz[] => {
  const shuffled = [...allQuizzes].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, allQuizzes.length));
};
