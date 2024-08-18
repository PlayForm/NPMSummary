import { platform } from "os";
import { Configuration, WellKnownApi } from "@pieces.app/pieces-os-client";

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
