import { ResultEnum } from "@/enums/httpEnum";
import { t } from "@/locales";
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
    const text = message || t("sys.api.operationSuccess");
    if (successMessageMode === "toast") {
      showSuccessToast(text);
    } else if (successMessageMode === "dialog") {
      showDialog({ title: t("sys.api.successTip"), message: text });
    }
  }
  errorTip() {
    const { errorMessageMode } = this.options;
    const text = this.getErrorMessage();
    if (errorMessageMode === "toast") {
      showFailToast(text);
    } else if (errorMessageMode === "dialog") {
      showDialog({ title: t("sys.api.errorTip"), message: text });
    }
  }
  getErrorMessage() {
    const { code, message } = this.options;
    return (
      {
        [ResultEnum.TIMEOUT]: t("sys.api.timeoutMessage"),
        [ResultEnum.OTHER_CUSTOM]: t("sys.api.otherCustomError")
      }[code] ||
      message ||
      t("sys.api.operationFailed")
    );
  }
}
