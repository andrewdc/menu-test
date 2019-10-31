<script>
  export let active = false;
  import theme from "./theme";

  function handleClick() {
    active = !active;
  }
  const apps = [
    {
      name: "HR Management",
      links: [
        { name: "Core HR", url: "http://starwars.com" },
        { name: "Time & Attendance", url: "http://google.com" }
      ]
    },
    {
      name: "Recruiting",
      links: [
        { name: "Applicant Tracking", url: "http://starwars.com" },
        { name: "Onboarding", url: "http://google.com" }
      ]
    },
    {
      name: "Learning and Development",
      links: [
        { name: "Learning Management", url: "http://starwars.com" },
        { name: "Performance", url: "http://google.com" },
        { name: "Succession", url: "http://google.com" },
        { name: "Collaboration", url: "http://google.com" },
        { name: "Knowledge base", url: "http://google.com" },
        { name: "Dashboard", url: "http://google.com" }
      ]
    }
  ];

  let ddmenuTopSpacing = theme.exaktime.ddmenuTopSpacing;
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

<menu class="menuContainer" style="--dd-menu-top-spacing:{ddmenuTopSpacing};">
<ul id="menu" class="appsList ddMenu" class:active>
  {#each apps as {name, links}}
    <li>
    <div class="ddMenuSubheader">
      {name}
    </div>
    <ul class="appLinks">
    {#each links as {name, url}}
      <li>
        <a href="{url}">{name}</a>
      </li>
    {/each}
    </ul>
    </li>
  {/each}
</ul>
</menu>