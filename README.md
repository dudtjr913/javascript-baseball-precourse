# ⚾ 미션 - 숫자 야구 게임

## 🎯 기능 요구사항

- 기본적으로 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임이다.
- 같은 수가 같은 자리에 있으면 `스트라이크`, 다른 자리에 있으면 `볼`, 같은 수가 전혀 없으면 `낫싱`이란 힌트를 얻고, 그 힌트를 이용해서 먼저 상대방(컴퓨터)의 수를 맞추면 승리한다.
  - 예) 상대방(컴퓨터)의 수가 425일 때
  - 123을 제시한 경우 : 1스트라이크
  - 456을 제시한 경우 : 1볼 1스트라이크
  - 789를 제시한 경우 : 낫싱
- 위 숫자 야구게임에서 상대방의 역할을 컴퓨터가 한다. 컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택한다. 게임 플레이어는 컴퓨터가 생각하고 있는 3개의 숫자를 입력하고, 컴퓨터는 입력한 숫자에 대한 결과를 출력한다.
- 이 같은 과정을 반복해 컴퓨터가 선택한 3개의 숫자를 모두 맞히면 게임이 종료된다.
- 게임을 종료한 후 게임을 다시 시작할 수 있다.
- 게임을 종료한 후 id가 `game-restart-button`인 버튼을 클릭함으로써 게임을 다시 시작할 수 있다. 
  - `예) <button id="game-restart-button">재시작</button>`

<br>

## 구현해야 할 기능 목록

  - 컴퓨터가 1 ~ 9까지의 서로 다른 임의의 수 3개를 선택하는 함수를 만든다.(게임 플레이어가 맞춰야 할 숫자) - makeOnAnswer
    - 이 때, 서로 다른 수를 뽑기 위해 임의로 1 ~ 9까지의 배열을 만든 뒤 splice, push하는 방법으로 진행한다.
    
  - 사용자의 입력을 받는 input에 addEventListener을 추가한다.
    - 이 때, 예외처리 함수를 만들어 관리한다. - isInputRight
    - 예외처리) 
    - 숫자가 아닌 다른 값이 있는 경우 => 정규표현식 이용
    - 중복되는 숫자를 입력한 경우 => new Set 이용
    - 3자리 미만의 숫자를 입력한 경우 => length 이용
    - 3자리 이상의 숫자를 입력한 경우 => length 이용
    
  - 사용자 입력에 이상이 없으면 게임을 시작한다. - 주어진 play 메소드를 통해
  - play 메소드에 결과값을 보여주는 strike, ball, out 변수를 객체로 추가한다.(실행될 때마다 초기화할 수 있도록)
  - play 메소드가 실행될 때마다 게임 플레이어의 숫자와 컴퓨터의 숫자를 비교하여 strike, ball, out에 추가할 수 있는 함수를 만든다. - compareInput
  - play 메소드의 return 값을 쿼리 스트링으로 바꾸어 ball, strike, out을 출력할 수 있도록 한다.
  - return된 값을 html의 결과 div에 append할 수 있도록 한다.
  
  - 정답을 맞추면(3S) 결과 div에 정답을 맞추었다는 메시지를 띄워주는 함수를 만든다. - gameFinish
  
  - 다시 시작할 수 있는 함수를 만든다 - reStartGame
