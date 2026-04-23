const fetch = require('node-fetch');

exports.handler = async function (event) {
    try {
        const body = event.body ? JSON.parse(event.body) : {};
        const login = body.login;

        if (!login) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Missing login in request body' }),
            };
        }

        const token = process.env.GITHUB_TOKEN;
        if (!token) {
            return {
                statusCode: 500,
                body: JSON.stringify({ message: 'Server misconfiguration: missing GITHUB_TOKEN' }),
            };
        }

        const query = `
      query($login: String!) {
          user(login: $login) {
              login
              avatarUrl(size: 80)
              url
              contributionsCollection {
                  contributionCalendar {
                      totalContributions
                      months { firstDay name year }
                      weeks { contributionDays { date contributionLevel contributionCount } }
                  }
              }
          }
      }
    `;

        const resp = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `bearer ${token}`,
            },
            body: JSON.stringify({ query, variables: { login } }),
        });

        const json = await resp.json();

        return {
            statusCode: resp.ok ? 200 : 502,
            body: JSON.stringify(json),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: String(err) }),
        };
    }
};
