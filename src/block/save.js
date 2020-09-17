/**
 * BLOCK: section-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
const {
	InnerBlocks,
} = wp.blockEditor;
const { Fragment, RawHTML } = wp.element;

export default ( { attributes, className } ) => {
	// return (
	// 	<Fragment className={ className }>
	// 		<RawHTML>
	// 			{ className + '<div class="' + ( className ? className : '' ) + '">' }
	// 		</RawHTML>
	// 	</Fragment>
	// );
	const test = 'testtt';
	return (
		<div className={ className }>
			x{ attributes.className }x
		</div>
	);
	// return (
	// 	<div className={ className }>
	// 		<InnerBlocks.Content />
	// 	</div>
	// );
};
