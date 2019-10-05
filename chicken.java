import java.io.*;
import java.util.*;
public class chicken {
    public static void main(String [] args) throws Exception {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int m = in.nextInt();

        if(m > n)
        {
            int diff = m - n;
            if( diff == 1)
              System.out.println("Dr. Chaz will have " + diff + " piece of chicken left over!");
            else
            System.out.println("Dr. Chaz will have " + diff + " pieces of chicken left over!");



        }
        if(m < n)
        {
            int diff = n - m;
            if(diff == 1)
            System.out.println("Dr. Chaz needs " + diff + " more piece of chicken!");
            else
            System.out.println("Dr. Chaz needs " + diff + " more pieces of chicken!");

                
            
        }

    }
}