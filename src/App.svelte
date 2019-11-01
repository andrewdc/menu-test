<script>
  // import Button from "./Button.svelte";
  import Menu from "./Menu.svelte";
  import MenuIcon from "./MenuIcon.svelte";
  import theme from "./theme";

  let show = false;
  let swapi = false;
  function swap() {
    swapi = !swapi;
  }
  function handleClick() {
    show = !show;
  }

  let mainBgColor = theme.exaktime.mainBgColor;
  let iconSquareColor = theme.exaktime.iconSquareColor;
  let mainTextColor = theme.exaktime.mainTextColor;
  let ddTextHoverColor = theme.exaktime.ddTextHoverColor;
  let currentModuleTextColor = theme.exaktime.currentModuleTextColor;
  let currentModuleWrapperHeight = theme.exaktime.currentModuleWrapperHeight;
  let ddmenuTopSpacing = theme.exaktime.ddmenuTopSpacing;
</script>

<style>
  :global(body) {
    font-family: "Montserrat", sans-serif;
    background: var(--main-bg-color);
    margin: 0px;
    padding: 0px;
  }
  .headerContainer {
    display: flex;
    width: 100%;
    margin: 0px;
    background-color: var(--main-bg-color);
    height: var(--currentModule-wrapper-height);
    color: var(--main-text-color);
  }
  .headerCell {
    height: var(--currentModule-wrapper-height);
    display: flex;
    flex-grow: 0.25;
    justify-content: flex-end;
  }
  .currentModuleContainer {
    position: relative;
  }
  .currentModuleWrapper {
    clear: all;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
    height: var(--currentModule-wrapper-height);
    width: 200px;
  }
  .currentModuleName {
    font-size: 16px;
    font-weight: 600;
    padding-right: 0px;
    padding-top: 2px;
    color: var(--currentModule-text-color);
    cursor: pointer;
  }
  .toolbar {
    position: absolute;
    top: 125px;
    font-size: 14px;
    text-align: left;
    background-color: #fff;
    border: 1px solid #ccc;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
    background-clip: padding-box;
    padding: 24px;
    width: 225px;
    margin-left: 50px;
    z-index: 999;
  }
  .toolbar button {
    padding: 10px;
  }
</style>

<main style="--main-bg-color:{mainBgColor};
--main-text-color:{mainTextColor}; 
--currentModule-text-color:{currentModuleTextColor};
--icon-square-color:{iconSquareColor};
--currentModule-wrapper-height:{currentModuleWrapperHeight};
--dd-menu-top-spacing:{ddmenuTopSpacing};
">
<!-- style="--main-bg-color:{mainBgColor}" -->
  <div class="headerContainer">
      <div class="headerCell"></div>
      <div class="headerCell"></div>      
      <div class="headerCell"></div>
      <div class="headerCell">

        <div class="currentModuleContainer currentModuleWrapper" on:click={handleClick}>
          <div class="currentModuleName" >Current Module</div>
          <MenuIcon />
          <div class="ddMenuContainer"><Menu active={show} swapi={swapi}/></div>
        </div>

      </div>
    </div>

<div class="toolbar">
  <button value="exaktime">ExakTime</button>
  <button value="infinity">Infinity</button>
  <button value="birddog">BirdDog</button>
  <button on:click="{swap}">Switch Data</button>
</div>
</main>