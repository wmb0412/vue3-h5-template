import { ResultEnum } from "@/enums/httpEnum";
import { ErrorMessageMode, SuccessMessageMode } from "@/types/axios";
import { showSuccessToast, showFailToast, showDialog } from "vant";
interface Options {
  message?: string;
  successMessageMode?: SuccessMessageMode;
  errorMessageMode?: ErrorMessageMode;
  code?: any;
}
export class AxiosMessageTip {
  options: Options;
  constructor(options: Options) {
    this.options = options;
  }
  showTip(hasSuccess: boolean) {
    hasSuccess ? this.successTip() : this.errorTip();
  }
  successTip() {
    const { message, successMessageMode } = this.options;
    const text = message || "操作成功";
    if (successMessageMode === "toast") {
      showSuccessToast(text);
    } else if (successMessageMode === "dialog") {
      showDialog({ title: "成功", message: text });
    }
  }
  errorTip() {
    const { errorMessageMode } = this.options;
    const text = this.getErrorMessage();
    if (errorMessageMode === "toast") {
      showFailToast(text);
    } else if (errorMessageMode === "dialog") {
      showDialog({ title: "错误提示", message: text });
    }
  }
  getErrorMessage() {
    const { code, message } = this.options;
    return (
      {
        [ResultEnum.TIMEOUT]: "登录超时，请重新登录",
        [ResultEnum.OTHER_CUSTOM]: "其他自定义的错误"
      }[code] ||
      message ||
      "操作失败"
    );
  }
}
