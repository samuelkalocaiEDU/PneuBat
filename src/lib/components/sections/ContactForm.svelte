<script lang="ts">
	type Fields = {
		name: string;
		email: string;
		phone: string;
		message: string;
	};

	interface Props {
		actionUrl: string;
		submitLabel?: string;
		title?: string;
		description?: string;
	}

	let {
		actionUrl,
		submitLabel = 'Odeslat zprávu',
		title = 'Kontaktní formulář',
		description = 'Vyplňte údaje a pošlete nám zprávu. Ozveme se vám co nejdříve.'
	}: Props = $props();

	let formElement = $state<HTMLFormElement | null>(null);
	let isSubmitting = $state(false);
	let isSuccess = $state(false);
	let errorMessage = $state('');

	let fields = $state<Fields>({
		name: '',
		email: '',
		phone: '',
		message: ''
	});

	function resetForm() {
		fields = {
			name: '',
			email: '',
			phone: '',
			message: ''
		};

		formElement?.reset();
	}

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		if (!formElement?.checkValidity()) {
			formElement?.reportValidity();
			return;
		}

		isSubmitting = true;
		isSuccess = false;
		errorMessage = '';

		try {
			const response = await fetch(actionUrl, {
				method: 'POST',
				body: new FormData(formElement),
				headers: {
					Accept: 'application/json'
				}
			});

			if (!response.ok) {
				throw new Error('Request failed');
			}

			isSuccess = true;
			resetForm();
		} catch {
			errorMessage = 'Odeslání se nezdařilo. Zkuste to prosím znovu.';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<section class="rounded-3xl border border-white/10 bg-surface-card/90 p-6 shadow-2xl shadow-black/20 backdrop-blur sm:p-8">
	<div class="mb-8 space-y-3">
		<p class="inline-flex items-center rounded-full border border-brand/20 bg-brand/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand">
			{title}
		</p>
		<p class="max-w-xl text-sm leading-6 text-text-muted sm:text-base">{description}</p>
	</div>

	{#if isSuccess}
		<div class="mb-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-100" aria-live="polite">
			Zpráva byla úspěšně odeslána. Brzy se vám ozveme.
		</div>
	{/if}

	{#if errorMessage}
		<div class="mb-6 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-100" aria-live="polite">
			{errorMessage}
		</div>
	{/if}

	<form bind:this={formElement} class="space-y-5" method="POST" action={actionUrl} onsubmit={handleSubmit}>
		<input type="hidden" name="access_key" value="c546317d-81b2-4a3d-9a30-b2edb56e6d05" />
        <div class="grid gap-5 sm:grid-cols-2">
			<label class="space-y-2">
				<span class="block text-sm font-semibold uppercase tracking-[0.18em] text-text-primary">Jméno</span>
				<input
					bind:value={fields.name}
					name="name"
					type="text"
					autocomplete="name"
					required
					class="w-full rounded-2xl border border-white/10 bg-surface px-4 py-3 text-text-primary outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/20"
					placeholder="Vaše jméno"
				/>
			</label>

			<label class="space-y-2">
				<span class="block text-sm font-semibold uppercase tracking-[0.18em] text-text-primary">E-mail</span>
				<input
					bind:value={fields.email}
					name="email"
					type="email"
					autocomplete="email"
					required
					class="w-full rounded-2xl border border-white/10 bg-surface px-4 py-3 text-text-primary outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/20"
					placeholder="vas@email.cz"
				/>
			</label>
		</div>

		<label class="block space-y-2">
			<span class="block text-sm font-semibold uppercase tracking-[0.18em] text-text-primary">Telefon</span>
			<input
				bind:value={fields.phone}
				name="phone"
				type="tel"
				autocomplete="tel"
				required
				class="w-full rounded-2xl border border-white/10 bg-surface px-4 py-3 text-text-primary outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/20"
				placeholder="+420 777 123 456"
			/>
		</label>

		<label class="block space-y-2">
			<span class="block text-sm font-semibold uppercase tracking-[0.18em] text-text-primary">Zpráva</span>
			<textarea
				bind:value={fields.message}
				name="message"
				rows="6"
				required
				class="w-full resize-y rounded-2xl border border-white/10 bg-surface px-4 py-3 text-text-primary outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/20"
				placeholder="Napište, s čím potřebujete pomoci"
			></textarea>
		</label>

		<div class="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
			<p class="text-sm leading-6 text-text-muted">Pole označená jako povinná musí být vyplněna před odesláním.</p>
			<button
				type="submit"
				disabled={isSubmitting}
				class="inline-flex items-center justify-center rounded-2xl bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-brand-light focus:outline-none focus:ring-4 focus:ring-brand/30 disabled:cursor-not-allowed disabled:opacity-60"
			>
				{isSubmitting ? 'Odesílání...' : submitLabel}
			</button>
		</div>
	</form>
</section>