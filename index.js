const renderApp = () => {
    const appEl = document.getElementById('app')
    appEl.innerHTML = `
      <div class="container">
      <div class="info">
          <p class="title">Выбери<br>сложность</p>
          <form id="form" class="form" >
                <div class="form-level">
                    <input type="radio" name="level" value="easy" id="easy-level">
                    <label for="easy-level" class="form-level-choice">1</label>
                    <input type="radio" name="level" value="average" id="average-level">
                    <label for="average-level" class="form-level-choice">2</label>
                    <input type="radio" name="level" value="difficult" id="difficult-level">
                    <label for="difficult-level" class="form-level-choice">3</label>
                </div>
                <div>
                    <button type="submit" class="button">Старт</button>
                </div>
            </form>
  </div>
    `
    const formEl = document.getElementById('form')

    formEl.addEventListener('submit', (event) => {
        if (formEl[0].checked) {
            appEl.innerHTML = `
            `
        }
        if (formEl[1].checked) {
            appEl.innerHTML = `Страница игры со вторым уровнем сложности`
        }
        if (formEl[2].checked) {
            appEl.innerHTML = `Страница игры с третьим уровнем сложности`
        }
        event.preventDefault()
    })
}

renderApp()
