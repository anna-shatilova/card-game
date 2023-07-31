import { gameField, resetGame } from '../index.js'

export const renderResultModule = () => {
    const moduleResultEl = document.getElementById('module')
    moduleResultEl.style.display = 'flex'

    moduleResultEl.innerHTML = `
      <dialog>
        <img class="info-img" src="./static/${
            gameField.status === 'won' ? 'celebration' : 'dead'
        }.svg" alt="" />
        <p class="title result-title">${
            gameField.status === 'won' ? 'Вы выиграли!' : 'Вы проиграли!'
        }</p>
        <p class="result-title-time">Затраченное время:</p>
        <div class="timer">
          <div class="timer-count result-count">${gameField.gameTime}</div>
        </div>
        <div>
          <button type="submit" class="result-go-button button" id="button-go">
          Играть снова
          </button>
        </div>
      </dialog>`

    const resultDialog = document.querySelector('dialog')
    resultDialog.showModal()

    const newGameButton = document.querySelector('.result-go-button')

    newGameButton.addEventListener('click', () => {
        moduleResultEl.style.display = 'none'
        resultDialog.close()
        resetGame()
    })
}
