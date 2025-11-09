import { QuizSet } from "@/types/quiz";

export const quizSets: QuizSet[] = [
  {
    type: "a",
    label: "에",
    quizzes: [
      {
        id: 1,
        question: "에임스는 금융위원회에서 선정한 국가대표 핀테크인 K-Fintech30으로 선정된 기업이다.",
        answer: true,
        explanation: "에임스는 K-Fintech30에 선정된 국가대표 핀테크 기업입니다."
      },
      {
        id: 2,
        question: "보험사에서 판매하는 실손의료비보험은 현재 5세대까지 출시 되었다.",
        answer: false,
        explanation: "실손의료비보험은 현재 4세대까지 출시되었습니다."
      }
    ]
  },
  {
    type: "b",
    label: "임",
    quizzes: [
      {
        id: 1,
        question: "실손보험을 가입한 환자가 허리가 아파 정형외과에 방문하였는데 도수치료를 하면서 병원의 권유로 얼굴 피부미용시술을 함께 받았다. 피부미용시술 금액을 도수치료 금액으로 둔갑해서 보험사에 실손보험 청구를 하는 것은 올바른 행동일까?",
        answer: false,
        explanation: "피부미용시술을 다른 치료로 속여서 청구하는 것은 보험사기에 해당하며 올바르지 않은 행동입니다."
      }
    ]
  },
  {
    type: "c",
    label: "스",
    quizzes: [
      {
        id: 1,
        question: "복잡한 보험약관을 사람이 아닌 AI를 활용하여 자동으로 데이터화하는 에임스의 서비스명칭은 오토딧이다.",
        answer: true,
        explanation: "에임스의 AI 기반 보험약관 자동 데이터화 서비스는 '오토딧(AutoDit)'입니다."
      },
      {
        id: 2,
        question: "에임스의 기술을 도입한 보험회사로 보험소비자가 보험금을 청구할 경우 다른 보험회사보다 보험금을 신속하고 정확하게 받을 수 있다.",
        answer: true,
        explanation: "에임스의 AI 기술을 활용하면 보험금 심사가 자동화되어 신속하고 정확한 보험금 지급이 가능합니다."
      }
    ]
  }
];

export const getQuizSetByType = (type: string): QuizSet | undefined => {
  return quizSets.find(set => set.type === type);
};

