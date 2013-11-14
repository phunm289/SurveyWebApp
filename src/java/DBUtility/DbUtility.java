/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package DBUtility;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Wise-SW
 */
public class DbUtility {

    Connection conn = null;

    public DbUtility() {
        try {
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(DbUtility.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public Connection getConn() {
        try {
            conn = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;databaseName=web_survey;SendStringParametersAsUnicode=true", "sa", "123456");
        } catch (SQLException ex) {
            Logger.getLogger(DbUtility.class.getName()).log(Level.SEVERE, null, ex);
        }
        return conn;
    }
    
    
    public void closeConn(ResultSet rs, Statement stmt) {
        try {
            if (rs != null && !rs.isClosed()) {
                rs.close();
            }
            if (stmt != null && !stmt.isClosed()) {
                stmt.close();
            }
            if (conn != null && !conn.isClosed()) {
                conn.close();
            }
        } catch (SQLException ex) {
            
        }
    }
    
    public void closeConn(ResultSet rs, PreparedStatement pstmt) {
        try {
            if (rs != null && !rs.isClosed()) {
                rs.close();
            }
            if (pstmt != null && !pstmt.isClosed()) {
                pstmt.close();
            }
            if (conn != null && !conn.isClosed()) {
                conn.close();
            }
        } catch (SQLException ex) {
            
        }
    }
}
