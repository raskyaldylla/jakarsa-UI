<script>
import { logoState } from "../Scripts/enum";
import Icons from "./Icons.svelte";
import Logo from './Logo.svelte'

let __logoState: logoState = logoState.BLUE;
let mobileMenuState = false;
</script>


<div class="w-full h-auto p-4">
  <div class="w-full flex flex-no-wrap justify-between items-center">
    <figure class="w-40 cursor-pointer">
       <Logo state={__logoState}></Logo>
    </figure>
    <div class="md:w-1/3 w-auto cursor-pointer">
      <div class="md:hidden block">
      <div class="w-8 text-secondary" on:click={()=> mobileMenuState = !mobileMenuState}><Icons name="burger"></Icons></div>
      </div>
      <div class="md:flex hidden flex-no-wrap justify-around items-center text-gray-800">
        <div class="button">About</div>
        <div class="button">Services</div>
        <div class="button">Contacts</div>
      </div>
    </div>
  </div>
</div>

<div class="mobile-menu {mobileMenuState ? "active": ""}">
  <div class="h-full w-full px-4 py-12 flex flex-no-wrap flex-col justify-center items-center">
    <figure class="w-48 cursor-pointer mb-4">
      <Logo state={logoState.BLUE}></Logo>
    </figure>
    <hr class="w-full">
    <div class="button">About</div>
    <div class="button">Services</div>
    <div class="button">Contacts</div>
  </div>
  <div class="absolute right-0 top-0 mr-4 mt-4 p-2">
    <div class="w-8 text-secondary cursor-pointer" on:click={()=> mobileMenuState = !mobileMenuState}><Icons name="close"></Icons></div>
  </div>
</div>

<style>
  .button {
    @apply font-bold relative text-lg;
  }
  .button::after {
    @apply absolute left-0 h-2 rounded-lg transition-all duration-150 ease-in-out;
    width: 0%;
    bottom: .25rem;
    z-index: -1;
    content: "";
    background: linear-gradient(to top right, theme('colors.primary-light'), theme('colors.primary-dark'))
  }
  .button:hover::after {
    width: 69%;
  }
  .mobile-menu {
    @apply w-0 h-full bg-white absolute top-0 right-0 transition-all duration-150 ease-in-out;
    transform: translateX(100px);
  }
  .mobile-menu .button {
    @apply text-2xl my-3 py-2 cursor-pointer leading-none;
  }
  .mobile-menu.active {
    @apply w-full;
    transform: translateX(0px);
  }

  @screen md {
    .mobile-menu {
      @apply hidden;
    }
  }
</style>