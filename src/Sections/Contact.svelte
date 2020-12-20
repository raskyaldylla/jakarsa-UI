<script>
import Icons from "../Components/Icons.svelte";


  
</script>

<div class="p-8 h-full w-full text-white">
  <div class="flex h-full w-full flex-no-wrap flex-col md:flex-row items-center justify-center md:justify-between">
    <div class="w-full md:mr-6" style="height: 50%">
      <iframe title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.317392338844!2d106.7804625145985!3d-6.221813388007533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f12d82b5cad9%3A0xec3043c856077a11!2sThe%20Bellezza%20Shopping%20Arcade!5e0!3m2!1sid!2sid!4v1608488602602!5m2!1sid!2sid" width="100%" height="100%" frameborder="0" style="border:0;" aria-hidden="false" tabindex="0"></iframe>
    </div>
    <div class="w-full mt-6 md:mt-0">
      <h2 class="md:text-4xl text-3xl font-title font-black leading-tight mb-8">Reach Us</h2>
      <p class="font-black text-lg">PT Jakarsa Mandiri International</p>
      <p>Bellezza BSA 1st Floor SA1-06, <br>
        Jl. Letjen Soepeno, Permata Hijau, <br>
        Kel. Grogol Utara, Kec. Kebayoran Lama, <br>
        Kota Adm. Jakarta Selatan, Prov. DKI Jakarta
      </p>
      <div class="flex flex-no-wrap mt-4">
        <div>
          <figure class="w-12 p-3 mr-2 rounded-full border-2 border-transparent hover:border-white hoverable" on:click={()=> {window.open('mailto:jakarsa.m.internasional@gmail.com', "_blank")}}><Icons name="email"></Icons></figure>
        </div>
        <div>
          <figure class="w-12 p-3 mr-2 rounded-full border-2 border-transparent hover:border-white hoverable"><Icons name="instagram"></Icons></figure>
        </div>
        <div>
          <figure class="w-12 p-3 mr-2 rounded-full border-2 border-transparent hover:border-white hoverable" on:click={()=> {window.open('https://wa.me/6281286020289', "_blank")}}><Icons name="whatsapp"></Icons></figure>
        </div>
      </div>
    </div>
  </div>
</div>