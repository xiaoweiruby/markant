// Small module for setting whether the user has unsaved changes.
;(function() {
	const defaultMessage = "You have unsaved changes. Are you sure you want to continue?";

	let hasChanges = false;

	// Warn the user that they're about to lose unsaved changes.
	// Return whether they want to continue.
	function confirmContinue(message) {
		const res = !getHasChanges() || confirm(message || defaultMessage);
		return res;
	}

	// Setter method for hasChanges.
	function setHasChanges(value) {
		hasChanges = value;
	}

	function getHasChanges() {
		return hasChanges;
	}

	module.exports = {
		setHasChanges,
		getHasChanges,
		confirmContinue
	};
}());
