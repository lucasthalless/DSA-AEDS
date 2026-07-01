// TLE...

public class Solution {
    public int NumberOfSubstrings(string s)
	{
		if (!s.Contains("a")) return 0;
		if (!s.Contains("b")) return 0;
		if (!s.Contains("c")) return 0;
		int numberOfSubtstrings = 0;
		
		for (int i = 0; i < s.Length - 2; i++)
		{
			for (int j = 3; i + j <= s.Length; j++) {
                string sSubstring = s.Substring(i, j);

                if (
                    sSubstring.Contains("a") &&
                    sSubstring.Contains("b") &&
                    sSubstring.Contains("c")
                )
                {
                    numberOfSubtstrings = numberOfSubtstrings + 1;
                }
            }
		}

		return numberOfSubtstrings;
	}
}
