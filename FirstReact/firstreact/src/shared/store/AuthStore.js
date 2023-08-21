import {observable} from "mobx";


class AuthStore {

  @observable
  clientAuth={};

}
export default new AuthStore();