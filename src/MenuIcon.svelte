<script>
  import theme from "./theme";
  export let theTheme = theme.exaktime;
</script>
<style>
  .sqWrapper {
    padding-left: 8px;
    padding-top: 0px;
  }
  .sqColor {
    float: left;
    width: 7px;
    height: 8px;
    background-color: var(--icon-square-color);
    border-right: 1px solid var(--main-bg-color);
    border-top: 1px solid var(--main-bg-color);
  }
</style>

<menuicon style={theTheme}>
<div class="sqWrapper">
	<div>
		<div class="sqColor">&nbsp;</div>
		<div class="sqColor">&nbsp;</div>
		<div class="sqColor">&nbsp;</div>
	</div>
	<div>
		<div class="sqColor">&nbsp;</div>
		<div class="sqColor">&nbsp;</div>
		<div class="sqColor">&nbsp;</div>
	</div>
</div>
</menuicon>