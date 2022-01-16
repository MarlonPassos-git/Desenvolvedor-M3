export function returnFormWithDetails() {

    const elementString = `
<form class="filters__form">
    <details class="form__session form__session--colors">
      <summary class="form__session--title">cores</summary>
      <div class="form__session--options showFiveItems">
        <label class="formItem__label">
          <input
            class="formItem__input"
            type="checkbox"
            name="cor"
            value="amarelo"
          />
          Amarelo
        </label>
        <label class="formItem__label">
          <input
            class="formItem__input"
            type="checkbox"
            name="cor"
            value="azul"
          />
          Azul
        </label>

        <label class="formItem__label">
          <input
            class="formItem__input"
            type="checkbox"
            name="cor"
            value="branco"
          />
          Branco
        </label>
        <label class="formItem__label">
          <input
            class="formItem__input"
            type="checkbox"
            name="cor"
            value="cinza"
          />
          Cinza
        </label>
        <label class="formItem__label">
          <input
            class="formItem__input"
            type="checkbox"
            name="cor"
            value="laranja"
          />
          Laranja
        </label>
        <label class="formItem__label">
          <input
            class="formItem__input"
            type="checkbox"
            name="cor"
            value="verde"
          />
          Verde
        </label>
        <label class="formItem__label">
          <input
            class="formItem__input"
            type="checkbox"
            name="cor"
            value="vermelho"
          />
          Vermelho
        </label>
        <label class="formItem__label">
          <input
            class="formItem__input"
            type="checkbox"
            name="cor"
            value="preto"
          />
          Preto
        </label>
        <label class="formItem__label">
          <input
            class="formItem__input"
            type="checkbox"
            name="cor"
            value="rosa"
          />
          rosa
        </label>
        <label class="formItem__label">
          <input
            class="formItem__input"
            type="checkbox"
            name="cor"
            value="vinho"
          />
          Vinho
        </label>
      </div>
      <button class="form__session--button">Ver todas as cores</button>
    </details>

    <!-- Sizes -->
    <details class="form__session form__session--sizes">
      <summary class="form__session--title">Tamanhos</summary>
      <div class="form__session--options form__session--sizes">
        <label class="formItem__label">
          <input
            class="formItem__input--sizes"
            type="checkbox"
            name="size"
            value="p"
          /><span>P</span>
        </label>

        <label class="formItem__label">
          <input
            class="formItem__input--sizes"
            type="checkbox"
            name="size"
            value="m"
          />
          <span>M</span>
        </label>

        <label class="formItem__label">
          <input
            class="formItem__input--sizes"
            type="checkbox"
            name="size"
            value="g"
          />
          <span>G</span>
        </label>

        <label class="formItem__label">
          <input
            class="formItem__input--sizes"
            type="checkbox"
            name="size"
            value="gg"
          />
          <span>gg</span>
        </label>

        <label class="formItem__label">
          <input
            class="formItem__input--sizes"
            type="checkbox"
            name="size"
            value="u"
          />
          <span>U</span>
        </label>

        <label class="formItem__label">
          <input
            class="formItem__input--sizes"
            type="checkbox"
            name="size"
            value="36"
          />
          <span>36</span>
        </label>

        <label class="formItem__label">
          <input
            class="formItem__input--sizes"
            type="checkbox"
            name="size"
            value="38"
          />
          <span>38</span>
        </label>

        <label class="formItem__label">
          <input
            class="formItem__input--sizes"
            type="checkbox"
            name="size"
            value="40"
          />
          <span>40</span>
        </label>

        <label class="formItem__label">
          <input
            class="formItem__input--sizes"
            type="checkbox"
            name="size"
            value="42"
          />
          <span>42</span>
        </label>

        <label class="formItem__label">
          <input
            class="formItem__input--sizes"
            type="checkbox"
            name="size"
            value="44"
          />
          <span>44</span>
        </label>

        <label class="formItem__label">
          <input
            class="formItem__input--sizes"
            type="checkbox"
            name="size"
            value="46"
          />
          <span>46</span>
        </label>
      </div>
    </details>

    <!-- Preços -->

    <details class="form__session form__session--prices">
      <summary class="form__session--title">Faixa de Preço</summary>
      <div class="form__session--options">
        <label class="formItem__label">
          <input
            class="formItem__input"
            type="radio"
            name="preco"
            value="0-50"
          />
          de R$0 até R$50
        </label>
        <label class="formItem__label">
          <input
            class="formItem__input"
            type="radio"
            name="preco"
            value="51-150"
          />de R$51 até R$150
        </label>
        <label class="formItem__label">
          <input
            class="formItem__input"
            type="radio"
            name="preco"
            value="151-300"
          />de R$151 até R$300
        </label>
        <label class="formItem__label">
          <input
            class="formItem__input"
            type="radio"
            name="preco"
            value="301-500"
          />de R$301 até R$500
        </label>
        <label class="formItem__label">
          <input
            class="formItem__input"
            type="radio"
            name="preco"
            value="501-10000000"
          />a partir de R$500
        </label>
      </div>
    </details>
  </form>
`
    const parser = new DOMParser();
    const $element = parser.parseFromString(elementString, "text/html").body.firstChild

    return $element
}