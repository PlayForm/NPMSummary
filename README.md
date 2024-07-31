# 🗣️ [Summary]

[Summary] is a powerful TypeScript library designed for efficient Git repository
analysis and summarization. It offers both sequential and parallel processing
capabilities, along with flexible file filtering options, all while leveraging
the [@pieces.app/pieces-os-client] SDK for enhanced functionality. Additionally,
[Summary] communicates with a Rust SDK via WebSockets for improved performance
and extended capabilities.

[Summary] will generate a comprehensive summary of all commits and tags between
the first and the last commit in your Git repository.

```typescript
import { Summary } from "@playform/summary";

new Summary().generateSummary({ Parallel: true }).then((Output) => {
	console.log(Output);
});
```

## Features

-   Customizable file pattern matching
-   Diff generation between Git tags
-   Directory traversal and file filtering
-   Exclusion of specified files or directories
-   Git repository analysis
-   Integration with [Pieces OS] via [@pieces.app/pieces-os-client] SDK
-   Parallel and sequential processing modes
-   WebSocket communication with Rust SDK for enhanced performance
-   Support for multiple programming languages and file types
-   Configurable logging levels
-   Efficient handling of large repositories
-   Asynchronous processing using Tokio runtime
-   Flexible command-line interface using Clap
-   Concurrent hash map implementation for improved performance
-   Advanced regex-based file filtering and omission
-   Customizable diff options for fine-grained control
-   Integration with external AI services for code analysis (via Pieces OS)

## [Pieces OS] Integration and Rust SDK Communication

The [Summary] library integrates with [Pieces OS] through the [@pieces.app/pieces-os-client]
SDK, allowing it to:

-   Generate comprehensive diff logs and release notes automatically
-   Provide AI-driven code analysis and insights
-   Offer improved context-aware processing of repository changes
-   Seamlessly interact with other [Pieces OS]-compatible development tools

Furthermore, [Summary] establishes a WebSocket connection with the Summary Rust
SDK, enabling:

-   Real-time, high-performance data processing
-   Efficient handling of large repositories and complex operations
-   Access to Rust's powerful concurrency and memory safety features
-   Seamless integration of Rust-based algorithms and utilities

By leveraging both [Pieces OS] and the Rust SDK, [Summary] can tap into a broader
ecosystem of development tools and services, significantly expanding its capabilities
beyond basic file processing while ensuring optimal performance.

## Installation

```sh
npm install @playform/summary @pieces.app/pieces-os-client
```

## Usage

Here's a basic example of how to use the Summary library:

```typescript
import { Summary, SummaryOptions } from "@playform/summary";
import { PiecesApi } from "@pieces.app/pieces-os-client";

const summary = new Summary(new PiecesApi());

summary
	.generateSummary({
		Parallel: true,
		Root: ".",
		Exclude: ["node_modules"],
		Pattern: ".git",
		Omit: ["Documentation"],
	})
	.then((Output) => {
		console.log(Output);
	});
```

## Options

The [Summary] library can be used with various options:

### Exclude

Exclude certain files or directories.

```typescript
{
    Exclude: ["node_modules"],
}
```

### Omit

Specify regex Patterns to Omit files from processing.

```typescript
{
    Omit: [
        /(?i)documentation/,
        /(?i)target/,
        /(?i)changelog\.md$/,
        /(?i)summary\.md$/,
    ],
}
```

### Parallel

Run processing in Parallel.

```typescript
{
    Parallel: true,
}
```

### Pattern

Specify a custom Pattern for matching.

```typescript
{
    Pattern: ".git",
}
```

### Root

Set the current working directory to a different folder.

```typescript
{
    Root: "/path/to/repository",
}
```

For [Pieces OS] integration, refer to the [@pieces.app/pieces-os-client] documentation
for specific configuration options.

## Examples

Analyze the current directory:

```typescript
new Summary(new PiecesApi()).generateSummary().then((Output) => {
	console.log(Output);
});
```

Analyze a specific directory in Parallel:

```typescript
new Summary(new PiecesApi())
	.generateSummary({
		Parallel: true,
		Root: "D:\\Developer",
	})
	.then((Output) => {
		console.log(Output);
	});
```

Exclude additional directories:

```typescript
new Summary(new PiecesApi())
	.generateSummary({
		Parallel: true,
		Exclude: ["node_modules", "target", "dist", "vendor"],
	})
	.then((Output) => {
		console.log(Output);
	});
```

Omit specific file Patterns:

```typescript
new Summary(new PiecesApi())
	.generateSummary({
		Parallel: true,
		Omit: [/\.md$/, /\.txt$/],
	})
	.then((Output) => {
		console.log(Output);
	});
```

## Dependencies

[Summary] relies on several npm packages to provide its functionality:

-   @pieces.app/pieces-os-client - For integration with Pieces OS
-   simple-git - For Git repository operations
-   glob - For file Pattern matching
-   diff - For generating diffs between files
-   worker-threads - For Parallel processing

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a history of changes to this library.

[Summary]: https://www.npmjs.com/package/@playform/summary
[Pieces OS]: https://pieces.app
[@pieces.app/pieces-os-client]:
	https://www.npmjs.com/package/@pieces.app/pieces-os-client
