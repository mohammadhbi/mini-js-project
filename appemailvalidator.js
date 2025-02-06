function isValidEmail(email) {
    if (!email.includes('@') || email.indexOf('@') !== email.lastIndexOf('@')) {
        return false;
    }

    const [localPart, domainPart] = email.split('@');

    if (localPart.length === 0) {
        return false;
    }

    if (!domainPart.includes('.')) {
        return false;
    }

    const dotIndex = domainPart.indexOf('.');
    const domainName = domainPart.slice(0, dotIndex);
    const domainExtension = domainPart.slice(dotIndex + 1);

    if (domainName.length === 0 || domainExtension.length === 0) {
        return false;
    }

    if (email.startsWith('@') || email.endsWith('@') || email.startsWith('.') || email.endsWith('.')) {
        return false;
    }

    return true;
}

function check() {
    const email = document.getElementById('input').value;

    if (isValidEmail(email)) {
        alert('Valid email');
    } else {
        alert('Invalid email');
    }
}

