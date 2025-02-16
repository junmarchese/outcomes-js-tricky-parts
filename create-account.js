function createAccount(pin, balance = 0) {
    return {
        checkBalance(enteredPin) {
            return enteredPin === pin ? `$${balance}` : "Invalid PIN.";
        },
        deposit(enteredPin, amount) {
            if (enteredPin !== pin) return "Invalid PIN.";
            balance += amount;
            return `Succesfully deposited $${amount}. Current balance: $${balance}.`;
        },
        withdraw(enteredPin, amount) {
            if (enteredPin !== pin) return "Invalid PIN.";
            if (amount > balance) return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            balance -= amount;
            return `Succesfully withdrew $${amount}. Current balance: $${balance}.`;
        },
        changePin(enteredPin, newPin) {
            if (enteredPin !== pin) return "Invalid PIN.";
            pin = newPin;
            return "PIN successfully changed!";
        }
    };
}

module.exports = { createAccount };
