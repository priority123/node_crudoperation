module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("users", {
      first_name: { type: Sequelize.STRING, allowNull: false },
        last_name: { type: Sequelize.STRING, allowNull: false },
        company_name: { type: Sequelize.STRING, defaultValue: "" },
        email_id: {
          type: Sequelize.STRING,
          validate: { isEmail: true },
          allowNull: false,
        },
        password: Sequelize.STRING,
        image_url: { type: Sequelize.STRING, validate: { isUrl: true } },
        signin_state: Sequelize.INTEGER,
        signup_type: Sequelize.INTEGER,
        sso_id: { type: Sequelize.STRING, defaultValue: "" },
        mobile: Sequelize.STRING,
        otp: Sequelize.STRING,
        user_state: Sequelize.INTEGER,
        verification_state: Sequelize.INTEGER,
        onboarding_status: Sequelize.INTEGER,
        plan: Sequelize.INTEGER,
        age: Sequelize.INTEGER,
        time_zone: Sequelize.STRING,
        is_sendreport: Sequelize.INTEGER,
        last_project_accessed: Sequelize.INTEGER
    });
  
    return user;
  };