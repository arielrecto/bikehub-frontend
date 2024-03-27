<script lang="ts">
	import useService from '$lib/composables/useService';
	import type { UseAuth } from '$lib/modules/auth/composables/useAuth';
	import { ServiceKey } from '$lib/services/service';
	const { get } = useService();

	const { user } = get<UseAuth>(ServiceKey.USER);
</script>

<h1>Welcome {$user?.name}!</h1>