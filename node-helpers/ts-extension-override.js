export async function resolve(specifier, context, nextResolve) {
    if (specifier.endsWith('.js')) {
        const tsSpecifier = specifier.replace(/\.js$/, '.ts');
        try {
            return await nextResolve(tsSpecifier, context);
        } catch {
            // Fall back to original if .ts doesn't exist
            return await nextResolve(specifier, context);
        }
    }
    return nextResolve(specifier, context);
}
