.skills-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 18px;
    margin-top: 30px;
}

.skills-container div {
    background: white;
    min-width: 130px;
    padding: 18px 22px;
    border-radius: 10px;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
    font-weight: bold;
    transition: 0.3s ease;
    border-bottom: 3px solid #2563eb;
}

.skills-container div:hover {
    transform: translateY(-7px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}