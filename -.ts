class ExtendableError extends Error {
    // Preserve that Error.length is 1
	constructor(a, ...rest) {
        // Error if not extended! This is an abstract-like class that should
        // not be instantiated itself, only extended.
        if (new.target === ExtendableError) {
            // This is the same error message that new HTMLElement() gives
            throw new Error(`Illegal constructor`)
        }

		super(a, ...rest)

		// Preset the name to be the @@toStringTag but fallback to the
        // classes .name property
        // TODO: Should we use new.target or this.constructor?
        this.name = this[Symbol.toStringTag] ?? this.constructor.name

        // Hide internal stack trace if possible
		if (typeof Error.captureStackTrace === "function") {
			Error.captureStackTrace(this, this.constructor)
		}
	}
}

export { ExtendableError as default }
