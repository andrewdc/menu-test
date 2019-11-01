<script>

  import { onMount } from 'svelte';
  import theme from "./theme";
  import apps from "./apps";
    
    export let theTheme = theme.exaktime;
    export let active;
    export let swapi;

//get dummy hardcoded data 
 let data = apps;

//get and store rest data
let swapiData;
onMount(async()=> {
  const response = await fetch('https://swapi.co/api/films/')
  const data = await response.json();
  swapiData = data.results.slice(0, 3);
});
//choose data source
  if (swapi) {
    data = swapiData
  } else {
    data = apps;
  }
  function handleClick() {
    active = !active;
  }
</script>

<style>
  .menuContainer {
    position: absolute;
    top: 0px;
    right: 0px;
  }
  .ddMenu {
    position: absolute;
    top: var(--dd-menu-top-spacing);
    right: 0;
    z-index: 1000;
    font-size: 14px;
    text-align: left;
    background-color: #fff;
    border: 1px solid #ccc;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
    background-clip: padding-box;
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    opacity: 0;
    transform-origin: right top 0px;
    -webkit-transform-origin: right top 0px;
    transform: scale(0);
    -webkit-transform: scale(0);
    padding: 24px;
    width: 230px;
    font: "Montserrat", sans-serif;
    color: #333333;
  }
  .active {
    opacity: 1;
    transform-origin: right top 0px;
    transform: scale(1);
  }
  .ddMenuSubheader {
    font-size: 16px;
    font-weight: 600;
    margin: 0px;
    padding: 0px;
  }
  .appsList {
    list-style: none;
  }
  .appsList ul {
    padding-bottom: 8px;
  }
  .appLinks {
    list-style: none;
    padding: 0;
  }
  .appLinks li {
    padding: 3px 8px;
  }
  .appLinks li:hover {
    background: #d8d8d8;
  }
  .appLinks a {
    text-decoration: none;
    display: block;
    color: #333;
  }
</style>

<menu class="menuContainer" style="{theTheme}">
{#if swapi}
    {#if swapiData}
        <!-- promise was fulfilled -->
        <ul id="menu" class="appsList ddMenu" class:active>
        {#each swapiData as film}
          <li>
          <div class="ddMenuSubheader">
            {film.title}
          </div>
          <ul class="appLinks">
          {#each film.planets as planet}
            <li>
              <a href="{planet}">{planet}</a>
            </li>
          {/each}
          </ul>
          </li>
        {/each}
      </ul>
    {:else}
      <!-- promise is pending -->
        <ul id="menu" class="appsList ddMenu" class:active>
          <li>Loading apps...</li>
        </ul>
    {/if}
{:else}
    <ul id="menu" class="appsList ddMenu" class:active>
      {#each data as app}
        <li>
        <div class="ddMenuSubheader">
          {app.name}
        </div>
        <ul class="appLinks">
        {#each app.links as {name, url}}
          <li>
            <a href="{url}">{name}</a>
          </li>
        {/each}
        </ul>
        </li>
      {/each}
    </ul>
{/if}
</menu>