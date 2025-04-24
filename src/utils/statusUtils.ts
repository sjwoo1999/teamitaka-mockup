// utils/statusUtils.ts
export const getStatusStyle = (status: string) => {
    switch (status) {
      case "진행 중":
        return { bg: "bg-primary", text: "text-white", label: "진행 중" };
      case "오늘 시작":
        return { bg: "bg-orange-300", text: "text-white", label: "오늘 시작" };
      case "예정":
        return { bg: "bg-gray-200", text: "text-gray-800", label: "예정" };
      default:
        return { bg: "bg-gray-100", text: "text-gray-500", label: "알 수 없음" };
    }
  };