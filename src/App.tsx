import { useState, useEffect } from "react";
import "./App.css";
import background from "./assets/bg_sanbul.jpg";
import { delay, handleFillCard, listCard } from "./utils";
import { checkApiParam } from "./components/CheckUrl";
import bg_hidden from './assets/images/hidden.png'

type Score = undefined | number;

function App() {
  // initial state
  const [box, setBox] = useState<object[]>();

  const [scorePlayer, setScorePlayer] = useState<Score>();
  const [scoreBanker, setScoreBanker] = useState<Score>();

  // initialize box
  useEffect(() => {
    const initializeBox = () => {
      const shuffledList = [...listCard];
      for (let i = shuffledList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
      }
      const newArr = shuffledList.slice(0, 6);
      setBox(newArr);
    };
  
    initializeBox();
  }, []);


   // check APIkey path Url
   useEffect(() => {
    checkApiParam();
  }, []);

  // render box cards
  const renderBox = () =>
    box?.map((item: any, index: number) => {
      return (
        <div className="box" id={item.v} key={index}>
          <img src={`${bg_hidden}`} className="front" />

          <div
            className="back"
            style={{
              backgroundImage: `url(${item.f})`,
            }}
          ></div>
        </div>
      );
    });

  // Translate Card
  const handleTranslateCard = async (list_eleBox: HTMLElement[]) => {
    for (let index = 0; index < list_eleBox.length; index++) {
      const div = list_eleBox[index];
      if (index === 0) {
        handleFillCard((index + 1) * 1000, div, "185px", "632px");
      }
      if (index === 1) {
        handleFillCard((index + 1) * 1000, div, "185px", "201px");
      }
      if (index === 2) {
        handleFillCard((index + 1) * 1000, div, "185px", "552px");
      }
      if (index === 3) {
        await handleFillCard((index + 1) * 1000, div, "185px", "122px");
        await delay(1000);
        list_eleBox[0].classList.add("fill");
        setScorePlayer(Number(list_eleBox[0].id));
        await delay(1000);
        list_eleBox[1].classList.add("fill");
        setScoreBanker(Number(list_eleBox[1].id));
      }
    }
  };

  // handle Card Two
  const handleFillCardTwo = async (div1: HTMLElement, div2: HTMLElement) => {
    handleFillCard(200, div1, "220px", "415px");
    handleFillCard(200, div2, "220px", "335px");
    await delay(200);
    div2.classList.add("fill");
    if (Number(div1.id) + Number(div2.id) > 10) {
      setScorePlayer(Number(div1.id) + Number(div2.id) - 10);
    } else if (Number(div1.id) + Number(div2.id) === 10) {
      setScorePlayer(0);
    } else {
      setScorePlayer(Number(div1.id) + Number(div2.id));
    }
    await delay(1000);
    handleFillCard(200, div1, "185px", "632px");
    handleFillCard(200, div2, "185px", "552px");
  };

  const handleFillCardTwo2 = async (div1: HTMLElement, div2: HTMLElement) => {
    handleFillCard(200, div1, "220px", "415px");
    handleFillCard(200, div2, "220px", "335px");
    await delay(200);
    div2.classList.add("fill");
    if (Number(div1.id) + Number(div2.id) > 10) {
      setScoreBanker(Number(div1.id) + Number(div2.id) - 10);
    } else if (Number(div1.id) + Number(div2.id) === 10) {
      setScoreBanker(0);
    } else {
      setScoreBanker(Number(div1.id) + Number(div2.id));
    }
    await delay(1000);
    handleFillCard(200, div1, "185px", "201px");
    handleFillCard(200, div2, "185px", "122px");
  };

  const handleRenderCardThree = (list_eleBox: HTMLElement[]) => {
    return new Promise<void>((resolve) => {
      setScorePlayer((prevState: Score) => {
        if (prevState !== undefined) {
          if (prevState < 5) {
            handleFillCard(200, list_eleBox[4], "185px", "711px");
            list_eleBox[4].classList.add("fill");
            if (prevState + Number(list_eleBox[4].id) > 10) {
              resolve();
              return prevState + Number(list_eleBox[4].id) - 10;
            } else if (prevState + Number(list_eleBox[4].id) == 10) {
              resolve();
              return 0;
            } else {
              resolve();
              return prevState + Number(list_eleBox[4].id);
            }
          }
          resolve();
          return prevState;
        }
      });
    });
  };

  const handleRenderCardThree2 = (list_eleBox: HTMLElement[]) => {
    return new Promise<void>((resolve) => {
      setScoreBanker((prevState: Score) => {
        if (prevState !== undefined) {
          if (prevState < 5) {
            handleFillCard(200, list_eleBox[5], "185px", "41px");
            list_eleBox[5].classList.add("fill");
            if (prevState + Number(list_eleBox[5].id) > 10) {
              resolve();
              return prevState + Number(list_eleBox[5].id) - 10;
            } else if (prevState + Number(list_eleBox[5].id) == 10) {
              resolve();
              return 0;
            } else {
              resolve();
              return prevState + Number(list_eleBox[5].id);
            }
          }
          resolve();
          return prevState;
        }
      });
    });
  };

  const handleResult = () => {
    return new Promise<void>((resolve) => {
      const ele_result = document.getElementById("result") as HTMLElement;
      setScorePlayer((prevPlayer) => {
        setScoreBanker((prevBanker) => {
          if (prevPlayer !== undefined && prevBanker !== undefined) {
            if (prevPlayer > prevBanker) {
              ele_result.innerHTML = 'Player Win'
              resolve()
            } else if (prevPlayer < prevBanker) {
              ele_result.innerHTML = 'Banker Win'
              resolve()
            } else {
              ele_result.innerHTML = 'Tie'
              resolve()
            }
          }
          resolve()
          return prevBanker;
        });
        resolve()
        return prevPlayer;
      });
    });
  };

  // handle Play Game
  const handlePlayGame = async () => {
    const list_eleBox = Array.from(
      document.getElementsByClassName("box") as HTMLCollectionOf<HTMLElement>
    );

    await handleTranslateCard(list_eleBox);
    await delay(600);
    await handleFillCardTwo(list_eleBox[0], list_eleBox[2]);
    await delay(500);
    await handleFillCardTwo2(list_eleBox[1], list_eleBox[3]);
    await delay(500);
    await handleRenderCardThree(list_eleBox);
    await delay(500);
    await handleRenderCardThree2(list_eleBox);
    await delay(300);
    await handleResult()
  };

  return (
    <div id="banner" style={{ backgroundImage: `url(${background})` }}>
      <main>
        <div id="baccarat">
          <div id="player">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>

          <div id="score">
            <p id="score-player" className="score-together">
              {scorePlayer}
            </p>
            <p id="score-banker" className="score-together">
              {scoreBanker}
            </p>
          </div>

          <div id="banker">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </div>

        {renderBox()}
      </main>
      <div id="result"></div>
      <button className="btn" onClick={handlePlayGame}>
        Play Game
      </button>
    </div>
  );
}

export default App;
