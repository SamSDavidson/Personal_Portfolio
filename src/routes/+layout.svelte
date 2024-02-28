<script lang="ts">
	import "../app.postcss";
	import { AppShell, AppBar, LightSwitch } from "@skeletonlabs/skeleton";
	function handleClickEvent(e: Event) {
		console.log(e);
	}
	let menuActive = false;
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<div class="relative inline-block text-left">
				<div
					class="z-10 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="menu-button"
					tabindex="-1"
				>
					<div class="py-1" role="none">
						<a class="btn btn-sm" href="/" rel="noreferrer">
							Home
						</a>
						<a
							class="btn btn-sm"
							href="https://github.com/SamSDavidson"
							target="_blank"
							rel="noreferrer"
							>GitHub
						</a>
						<a
							class="btn btn-sm"
							href="mailto:samdavidson@skiff.com"
							target="_blank"
							rel="noreferrer"
						>
							Email Me
						</a>
						<a
							class="btn btn-sm"
							href="/education"
							rel="noreferrer"
						>
							Education
						</a>
						<a class="btn btn-sm" href="/personal" rel="noreferrer">
							Personal Projects
						</a>
						<a class="btn btn-sm" href="/playbook" rel="noreferrer">
							Cybersecurity Playbook
						</a>
						<div class="btn btn-sm">
							<LightSwitch />
						</div>
					</div>
				</div>
			</div>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>

<style>
	a:hover {
		background-color: rgb(157, 185, 185);
		border-radius: 40px;
		color: black;
	}
</style>
