const func = () => {
    const msg = document.querySelector("#message")
    msg!.textContent = 'Hello there'
}

document.querySelector("#btn")!.addEventListener('click', func)