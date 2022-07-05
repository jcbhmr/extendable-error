class ExtendableError extends Error {
	// Preset the name to be the "@@toStringTag" but fallback to the
	// classes .name property
	name = this[Symbol.toStringTag] ?? this.constructor.name
	
	// Preserve that Error.length is 1
	constructor(a, ...rest) {
		// Error if not extended! This is an abstract-like class that should
		// not be instantiated itself, only extended.
		if (new.target === ExtendableError) {
		    // This is the same error message that new HTMLElement() gives
		    throw new Error(`Illegal constructor`)
		}
		
		super(a, ...rest)
		
		// Hide internal stack trace if possible
		// @ts-ignore TS doesn't know about V8 captureStackTrace()
		if (typeof Error.captureStackTrace === "function") {
		// @ts-ignore
			Error.captureStackTrace(this, this.constructor)
		}
	}
}

export { ExtendableError as default }
