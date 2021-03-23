import Swal, { SweetAlertOptions, SweetAlertResult } from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const useAlert = () => {
  const show = (options: SweetAlertOptions): Promise<SweetAlertResult> => {
    return MySwal.fire(options);
  };
  return {
    show,
  };
};

export default useAlert;
