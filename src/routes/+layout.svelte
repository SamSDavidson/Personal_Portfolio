<script lang="ts">
	import "../app.postcss";
	import { AppShell, AppBar, LightSwitch } from "@skeletonlabs/skeleton";
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<LightSwitch />
				<a
					class="btn btn-sm variant-ghost-surface"
					href="/"
					target="_blank"
					rel="noreferrer"
				>
					Home
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="mailto:samdavidson@headtohogwarts.net"
					target="_blank"
					rel="noreferrer"
				>
					Email me
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="#"
					target="_blank"
					rel="noreferrer"
				>
					View my Resume
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/SamSDavidson"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
