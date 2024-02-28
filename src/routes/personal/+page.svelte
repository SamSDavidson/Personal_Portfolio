<div class="container flex flex-col item-center mx-auto">
  <section class="h-screen flex flex-row max-sm:flex-wrap items-center">
    <div class="mx-auto flex flex-col items-center">
      <h1 class="h1">Programming</h1>
    </div>
    <div class="mx-auto flex flex-row items-start">
      <section class="justify-center mx-10">
        <ul class="flex flex-col items-center">
          <h2 class="h3">Languages</h2>
          <li>CSS</li>
          <li>C#</li>
          <li>Go</li>
          <li>HTML</li>
          <li>Java</li>
          <li>JavaScript/Typescript</li>
          <li>PowerShell</li>
          <li>Python</li>
          <li>Rust</li>
          <li>Shell</li>
          <li>SQL</li>
        </ul>
      </section>
      <section class="justify-center mx-10">
        <ul class="flex flex-col items-center">
          <h2 class="h3">Frameworks</h2>
          <li>Express</li>
          <li>Node</li>
          <li>Numpy</li>
          <li>Pandas</li>
          <li>PyQt6</li>
          <li>React</li>
          <li>Svelte/SvelteKit</li>
        </ul>
      </section>
    </div>
  </section>
  <section class="h-screen flex flex-row max-sm:flex-wrap items-center">
    <div class="mx-auto flex flex-col items-center">
      <ul class="flex flex-col items-center">
        <li>Aruba</li>
        <li>Cisco</li>
        <li>Lynis</li>
        <li>Metasploit</li>
        <li>Netcat</li>
        <li>Nmap</li>
        <li>OpenVAS</li>
        <li>OPNSense</li>
        <li>OSSEC</li>
        <li>Snort</li>
        <li>Suricata</li>
        <li>Wazuh SIEM</li>
        <li>Wireshark</li>
        <li>Zabbix</li>
      </ul>
    </div>
    <div class="mx-auto flex flex-col items-center">
      <h1 class="h1">Network Administration</h1>
    </div>
  </section>
  <section class="h-screen flex flex-row max-sm:flex-wrap items-center">
    <div class="mx-auto flex flex-col items-cente">
      <h1 class="h1">Systems Administration</h1>
    </div>
    <div class="mx-auto flex flex-col items-cente">
      <ul class="flex flex-col items-center">
        <li>Docker / Docker Compose</li>
        <li>Grafana / Grafana Loki</li>
        <li>Linux Systems: Debian, OpenSUSE, RedHat</li>
        <li>NGINX</li>
        <li>Proxmox</li>
        <li>Prometheus</li>
        <li>VMWare</li>
        <li>Windows Systems: Home OS & Server</li>
      </ul>
    </div>
  </section>
</div>

<style>
  /* keyframe for text dropdown as the screen scrolls to it */

  @keyframes drop-down {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(10%);
      opacity: 1;
    }
    110% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
  .container {
    animation: drop-down 2s;
  }
</style>
