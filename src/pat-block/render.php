<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */


?>

<p <?php echo get_block_wrapper_attributes(); ?>>
	<div id="replacement_id" data-sample-value="<?php echo esc_attr( $attributes['sampleValue']); ?>">Hello</div>
</p>
