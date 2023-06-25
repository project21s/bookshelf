function AppButton(size, header) {
    let sizeClass;
    if (size == 's') {
        sizeClass = "small-button";
    } else {
        sizeClass = "med-button";
    }
    return (
        <button className={sizeClass}>
            {header}
        </button>
    );
}