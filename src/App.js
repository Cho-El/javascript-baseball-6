import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const a = await MissionUtils.Console.readLineAsync("입력해주세요 : ");
    MissionUtils.Console.print(a);
  }
}

const test = new App();
test.play();

export default App;
