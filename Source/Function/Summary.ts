import { WellKnownApi, Configuration } from "@pieces.app/pieces-os-client";
import { platform } from "os";

new WellKnownApi(
	Configuration({
		basePath: `http://localhost:${platform() === "linux" ? 5323 : 1000}`,
	}),
)
	.getWellKnownHealth()
	.then((Message: string) => {
		console.log(Message);
	})
	.catch((_Error: unknown) => console.error(_Error));
