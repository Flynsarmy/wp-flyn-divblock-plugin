/**
 * BLOCK: section-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
const { Fragment } = wp.element;

const {
	InnerBlocks,
} = wp.blockEditor;

export default ( props ) => {
	return (
		<Fragment>
			<div
				className={ props.className }
			>
				<InnerBlocks />
			</div>
		</Fragment>
	);
};
