export type Action = "click" | "user_action";
export type Category = "footnote" | "password_checke";

const useGa = () => {
  const event = (params: {
    action: Action;
    category: Category;
    label?: string;
    value?: string;
  }) => {
    gtag("event", params.action, {
      event_category: params.category,
      event_label: params.label,
      value: params.value,
    });
  };

  return {
    event,
  };
};

export default useGa;
