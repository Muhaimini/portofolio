import Cookies from "js-cookie";
import { COOKIES_KEY } from "^services/constants/cookies";

interface CookiesProps {
  key: COOKIES_KEY;
  value: string;
  expires: number;
}

const useCookies = () => {
  return {
    remove: (props: COOKIES_KEY) => Cookies.remove(props),
    get: (props: COOKIES_KEY) => Cookies.get(props) || "",
    set: (props: CookiesProps) =>
      Cookies.set(props.key, props.value, {
        expires: props.expires,
      }),
  };
};

export default useCookies;
