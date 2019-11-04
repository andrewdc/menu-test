<script>
  import Menu from "./Menu.svelte";
  import MenuIcon from "./MenuIcon.svelte";
  import theme from "./theme";

let theTheme = theme.exaktime;

let menuProps = {
   active: false,
   swapi: false
 } 

  function swap() {
    menuProps.swapi = !menuProps.swapi;
  }
  function handleClick() {
    menuProps.active = !menuProps.active;
  }
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
    width: 295px;
    margin-left: 50px;
    z-index: 999;
  }
  .toolbar button {
    padding: 10px;
  }
</style>
<main style="{theTheme}">
  <div class="headerContainer">
      <div class="headerCell"></div>
      <div class="headerCell"></div>      
      <div class="headerCell"></div>
      <div class="headerCell">

        <div class="currentModuleContainer currentModuleWrapper" on:click={handleClick}>
          <div class="currentModuleName" >Current Module</div>
          <MenuIcon theTheme={theTheme} />
          <div class="ddMenuContainer"><Menu {...menuProps} theTheme={theTheme}/></div>
        </div>

      </div>
    </div>

<div class="toolbar">
  <button value="exaktime"  on:click="{() => theTheme = theme.exaktime}">ExakTime</button>
  <button value="infinity"  on:click="{() => theTheme = theme.ihr}">Infinity</button>
  <button value="birddog"  on:click="{() => theTheme = theme.birddog}">BirdDog</button>
  <button on:click="{swap}">Switch Data</button>
</div>
</main>