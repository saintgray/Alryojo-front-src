import Banner1 from '@resource/image/banner/banner1.svg';
import Banner2 from '@resource/image/banner/banner2.png';
import Banner3 from '@resource/image/banner/banner3.png';
import Banner4 from '@resource/image/banner/banner4.png';
import { action, computed, observable, toJS } from "mobx";
import { autobind } from "core-decorators";

@autobind
class MainStore {

  @observable
  banners = [
    { resource: `${ Banner1 }`, displayF: 'Y',},
    { resource: `${ Banner2 }`,},
    { resource: `${ Banner3 }`,},
    { resource: `${ Banner4 }`,},
  ];

  @computed
  get getBanners() { return toJS(this.banners) };

  @action
  rolling = () => {
    setInterval(() => {
      setTimeout(() => {
        let _tempBanners = [...this.banners];
        _tempBanners[0].displayF = null;
        _tempBanners.push(_tempBanners[0]);
        _tempBanners = _tempBanners.splice(1, _tempBanners.length);
        _tempBanners[0].displayF = 'Y';
        this.banners = [..._tempBanners];
      }, 700)
    }, 5000);
  }
}

export default new MainStore();
export const mainstore = new MainStore();